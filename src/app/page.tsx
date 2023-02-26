export default function Home({
  searchParams,
}: {
  searchParams: { a?: string };
}) {
  return (
    <div>
      <div>The `a` query param is: {searchParams.a}</div>
    </div>
  );
}

export const dynamic = "force-dynamic";
