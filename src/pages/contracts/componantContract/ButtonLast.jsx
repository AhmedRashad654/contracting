
export default function ButtonLast() {
  return (
    <div className="mt-5 flex justify-between items-center">
      <div className="text-grayColor text-[0.9rem]">1 - 4of 50 items</div>
      <div className="flex gap-3 items-center">
        <button className="text-grayColor border border-grayColor px-3 pt-1 pb-2 rounded-md">
          Previous
        </button>
        <button className="text-white bg-primaryColor border border-primaryColor px-3 pt-1 pb-2 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}
