const ButtonLoading = () => {
  return (
    <span className="text-primary flex items-center gap-2 justify-center">
      <span className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      Loading...
    </span>
  );
};

export default ButtonLoading;
