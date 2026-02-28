// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketFactory is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    struct Event {
        string name;
        uint256 maxTickets;
        uint256 soldCount;
        uint256 priceWei;
        bool exists;
    }

    mapping(uint256 => Event) public events;
    mapping(uint256 => uint256) public ticketToEvent;
    mapping(address => mapping(uint256 => uint256)) public userTicketCount;
    uint256 public eventCount;
    uint256 public constant MAX_TICKETS_PER_USER = 2;

    constructor() ERC721("MonadTicket", "MTKT") Ownable(msg.sender) {}

    function createEvent(string memory name, uint256 maxTickets, uint256 priceWei) external onlyOwner {
        events[eventCount] = Event(name, maxTickets, 0, priceWei, true);
        eventCount++;
    }

    function mintTicket(uint256 eventId) external payable {
        Event storage evt = events[eventId];
        require(evt.exists, "Event not found");
        require(evt.soldCount < evt.maxTickets, "Sold out");
        require(msg.value >= evt.priceWei, "Insufficient payment");
        require(userTicketCount[msg.sender][eventId] < MAX_TICKETS_PER_USER, "Max tickets reached");

        uint256 tokenId = _tokenIdCounter++;
        _safeMint(msg.sender, tokenId);
        ticketToEvent[tokenId] = eventId;
        userTicketCount[msg.sender][eventId]++;
        evt.soldCount++;
    }

    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = _ownerOf(tokenId);
        require(from == address(0), "Soulbound: transfer not allowed");
        return super._update(to, tokenId, auth);
    }

    function hasTicket(address user, uint256 eventId) external view returns (bool) {
        return userTicketCount[user][eventId] > 0;
    }

    function getEventInfo(uint256 eventId) external view returns (string memory name, uint256 maxTickets, uint256 soldCount, uint256 priceWei) {
        Event storage evt = events[eventId];
        return (evt.name, evt.maxTickets, evt.soldCount, evt.priceWei);
    }
}