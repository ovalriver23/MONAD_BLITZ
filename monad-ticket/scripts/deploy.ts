import { network } from "hardhat";

const { ethers } = await network.connect({
    network: "monad",
    chainType: "l1",
});

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with account:", deployer.address);

    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Account balance:", ethers.formatEther(balance), "MON");

    // Deploy TicketFactory
    const TicketFactory = await ethers.getContractFactory("TicketFactory");
    const ticketFactory = await TicketFactory.deploy();
    await ticketFactory.waitForDeployment();

    const contractAddress = await ticketFactory.getAddress();
    console.log("TicketFactory deployed to:", contractAddress);

    // Create initial event
    const tx = await ticketFactory.createEvent(
        "Istanbul Konseri",
        100,
        ethers.parseEther("0.01")
    );
    await tx.wait();
    console.log("Event 'Istanbul Konseri' created (id: 0, max: 100, price: 0.01 MON)");

    // Verify event was created
    const eventInfo = await ticketFactory.getEventInfo(0);
    console.log("Event info:", {
        name: eventInfo[0],
        maxTickets: eventInfo[1].toString(),
        soldCount: eventInfo[2].toString(),
        priceWei: eventInfo[3].toString(),
    });

    console.log("\n--- SAVE THIS ---");
    console.log(`CONTRACT_ADDRESS=${contractAddress}`);
    console.log("Add this to your .env.local file");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
