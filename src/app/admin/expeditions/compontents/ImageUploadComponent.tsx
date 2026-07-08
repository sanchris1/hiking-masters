import Image from "next/image";
import { HiPhoto } from "react-icons/hi2";

const ImageUploadComponent = ({
  preview,
  handleImageChange,
}: {
  preview: string | null;
  handleImageChange: (file: File) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    handleImageChange(file);
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor="image-input"
        className="relative border-2 rounded-2xl overflow-hidden cursor-pointer  border-dashed border-primary/70 hover:border-primary transition-all duration-300 flex items-center justify-center flex-col min-h-90 max-w-2xl mx-auto"
      >
        {!preview ? (
          <>
            <HiPhoto className="size-12" />
            <p className="text-lg text-primary font-medium">
              No image selected
            </p>
            <span className="text-sm text-secondary">
              Click to select an image
            </span>
          </>
        ) : (
          <Image
            src={preview}
            alt="preview image"
            fill
            className="object-cover rounded-2xl"
          />
        )}
      </label>
      <input
        type="file"
        id="image-input"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export default ImageUploadComponent;
