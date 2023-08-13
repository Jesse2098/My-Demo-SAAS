import SearchInput from "@/components/SearchInput";
import { Categories } from "@/components/categories";
import prismadb from "@/lib/prismadb";


async function Home() {
  const categories = await prismadb.category.findMany()
  return ( 
    <div className="h-full p-4 space-y-2">
      <SearchInput/>
      <Categories 
        data={categories}
      />
    </div>
   );
}

export default Home ;