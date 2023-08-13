const {PrismaClient} = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        
        await db.categories.createMany({
            data: [
                {name: "Fashion"},
                {name: "Music"},
                {name: "Podcast"},
                {name: "Science"},
                {name: "YouTube"},
            ]
        })
    } catch (error) {
        console.error("Error seeding default categories", error)
    } finally {
        await db.$disconnect();
    }
}

main();