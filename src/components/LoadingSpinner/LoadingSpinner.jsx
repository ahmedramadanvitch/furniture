import { Triangle } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center z-20 top-0 left-0 bottom-0 right-0 bg-gray-300 fixed">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#3a988df3"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
