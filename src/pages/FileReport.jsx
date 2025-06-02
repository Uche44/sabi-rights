// const FileReport = () => {
//   return (
//     <section className="w-full min-h-screen flex flex-col items-center py-8 px-5 bg-white">
//       <h2 className="text-2xl font-bold text-[#ef2fff]">Violated?</h2>
//       <h2 className="text-xl font-semibold text-gray-600 mb-8">
//         Report through Us!
//       </h2>
//       <form
//         action=""
//         className="h-fit w-full"
//       >
//         <div className="h-fit w-full">
//           <input
//             type="text"
//             className="h-[3.5rem] w-full border-gray-600 border-dashed border-2 px-4 py-4 rounded-[10px] bg-gray-100 focus:outline-none focus:border-[#ef2fff] transition-colors duration-300 text-[#ef2fff] focus:text-gray-600"
//             placeholder="Violation type"
//           />
//           <label htmlFor="" className="">

//           </label>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default FileReport;

import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa6";

const FileReport = () => {
  const [formData, setFormData] = useState({
    violationType: "",
    description: "",
    location: "",
    isAnonymous: false,
    media: null,
  });

  const [errors, setErrors] = useState({});
  const [autoLocation, setAutoLocation] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const violationOptions = [
    "Police brutality",
    "Unlawful detention",
    "Gender-based violence",
    "Child abuse",
    "Labor rights violation",
    "Right to education violation",
    "Discrimination",
    "Torture",
    "Forced eviction",
    "Suppression of freedom of speech",
    "Denial of healthcare",
    "Right to life violation",
  ];
  <h2 className="text-2xl font-bold text-[#ef2fff]">Violated?</h2>;
  //       <h2 className="text-xl font-semibold text-gray-600 mb-8">
  //         Report through Us!
  //       </h2>
  // Get geolocation
  useEffect(() => {
    if (!formData.isAnonymous && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = `${pos.coords.latitude}, ${pos.coords.longitude}`;
          setAutoLocation(coords);
          setFormData((prev) => ({ ...prev, location: coords }));
        },
        () => {
          console.warn("Geolocation not allowed or failed.");
        }
      );
    }
  }, [formData.isAnonymous]);

  const validate = () => {
    const newErrors = {};
    if (!formData.violationType) newErrors.violationType = "Required.";
    if (!formData.description || formData.description.length < 10)
      newErrors.description = "Please describe what happened (min 10 chars).";
    if (!formData.location) newErrors.location = "Location is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        ...(checked ? { location: "" } : { location: autoLocation }),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, media: files[0] }));
      setPreviewUrl(URL.createObjectURL(files));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted data:", formData);
      // Submit to backend or handle further
    }
  };

  const inputClass =
    "h-[3.5rem] w-full border-gray-600 border-dashed border-2 px-4 py-4 rounded-[10px] bg-gray-100 focus:outline-none focus:border-[#ef2fff] transition-colors duration-300 text-[#ef2fff] focus:text-gray-600";

  return (
    <>
      <h2 className="text-[#ef2fff] font-bold text-2xl text-center mt-4">
        Violated?
      </h2>
      <h2 className="text-gray-600 text-xl font-semibold text-center">
        Report through Us!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto h-fit space-y-6 p-4"
      >
        {/* Violation Type */}
        <div>
          <label className="block mb-1 font-medium">Violation Type *</label>
          <select
            name="violationType"
            value={formData.violationType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a violation type</option>
            {violationOptions.map((v) => (
              <option
                key={v}
                value={v}
              >
                {v}
              </option>
            ))}
          </select>
          {errors.violationType && (
            <p className="text-red-500 text-sm mt-1">{errors.violationType}</p>
          )}
        </div>

        {/* Description */}
        <div className="h-fit w-full">
          <label className="block h-fit w-full mb-1 font-medium">
            What happened? *
          </label>
          <textarea
            name="description"
            rows={10}
            placeholder="Enter brief description of the incident (min 10 characters)"
            autoComplete="off"
            value={formData.description}
            onChange={handleChange}
            className="h-[10rem] w-full border-gray-600 border-dashed border-2 px-4 py-4 rounded-[10px] bg-gray-100 focus:outline-none focus:border-[#ef2fff] transition-colors duration-300 text-[#ef2fff] focus:text-gray-600 resize-none"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Upload Media */}
        <div>
          <label className="block mb-1 font-medium">
            Upload Media (optional)
          </label>

          <div className="relative inline-block">
            <label
              htmlFor="media-upload"
              className="cursor-pointer inline-flex items-center justify-center h-[3.5rem] w-[3.5rem] border-dashed border-2 border-gray-600 rounded-[10px] bg-gray-100 text-[#ef2fff] hover:text-gray-600 transition-colors duration-300"
            >
              <FaCamera />
              <input
                id="media-upload"
                type="file"
                accept="image/*,video/*"
                name="media"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>

          {formData.media && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-2">
                Selected: {formData.media.name}
              </p>

              {previewUrl && formData.media.type.startsWith("image/") && (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-48 h-auto rounded border"
                />
              )}

              {previewUrl && formData.media.type.startsWith("video/") && (
                <video
                  src={previewUrl}
                  controls
                  className="w-64 h-auto rounded border"
                />
              )}
            </div>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">
            Location {formData.isAnonymous ? "(manual)" : "(auto-detected)"}
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter location manually"
            disabled={!formData.isAnonymous && !!autoLocation}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        {/* Anonymous */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
          />
          <label className="text-sm font-medium">Report anonymously</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#ef2fff] text-white px-6 py-2 rounded-lg hover:bg-[#c927d2] transition-colors"
        >
          Submit Report
        </button>
      </form>
    </>
  );
};

export default FileReport;
