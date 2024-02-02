import AllProductsHome from "@/components/AllProductsHome";


const page = async ({ searchParams }: {
  searchParams: {
    query?: string;
    page?: string;

  }
}) => {



  return (
    <div className="h-full">
      <AllProductsHome searchParams={searchParams} />
    </div>
  )
}

export default page