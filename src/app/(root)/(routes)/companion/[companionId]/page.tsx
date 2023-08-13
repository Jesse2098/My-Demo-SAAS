import prismadb from "@/lib/prismadb";

interface CompanionIdPageProps {
    params : {
        companionId: string;
    }
}

async function CompanionIdPage({
    params
} : CompanionIdPageProps) {
    //todo: check whether they are subcribed

    //fetch a companion
    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId
        }
    })

    return ( 
        <div>
            Hello Companion ID!
        </div>
     );
}

export default CompanionIdPage;