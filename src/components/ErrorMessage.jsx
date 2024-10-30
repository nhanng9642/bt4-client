// eslint-disable-next-line react/prop-types
export default function ErrorMessage({children}) {
  return (
    <div className="mt-2 mb-4 text-sm text-red-800 rounded-lg" role="alert">
        {children}
    </div>
  );
}
