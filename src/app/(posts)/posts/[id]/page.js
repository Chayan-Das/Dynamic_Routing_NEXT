import SinglePost from "@/components/SinglePost";

export default function posts({ params }) {
  const { id } = params;
  return (
    <div>
      <SinglePost id={id}/>
    </div>
  );
}
