import React, { useState } from 'react';
import articals from "../data/articals.json";

function ContributionForm() {
    const [totalParagraphs, setTotalParagraphs] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newArtical = {
            id: formData.get("HeadLine").replace(/\s+/g, "_"),
            HeadLine: formData.get("HeadLine"),
            Discription: formData.get("Discription"),
            headImageURL: formData.get("headImageURL"),
            paragraph: [],
            author: {
                name: formData.get("author_name"),
                email: formData.get("author_email"),
                profilePicURL: formData.get("author_profilePic")
            }
        };

        for (let i = 0; i < totalParagraphs; i++) {
            const para = formData.get(`paragraph-${i}`);
            if (para) newArtical.paragraph.push(para);
        }

        articals.push(newArtical);
        console.log("✅ New artical added:", newArtical);
        console.log("🗃️ All articals:", articals);
        alert("Article submitted successfully!");
        e.target.reset();
        setTotalParagraphs(1); // Reset to default after submit
    };

    return (
        <div className="flex justify-center">
            <form id="AuthorInfo" className="w-[890px] flex flex-col" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold pb-7">About Yourself</h2>
                <div className="pb-5">
                    <label className="block text-s font-semibold text-gray-700 pb-2">Name</label>
                    <input type="text" name="author_name" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="pb-5">
                    <label className="block text-s font-semibold text-gray-700 pb-2">Email</label>
                    <input type="email" name="author_email" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="pb-5">
                    <label className="block text-s font-semibold text-gray-700 pb-2">Profile Picture (URL)</label>
                    <input type="url" name="author_profilePic" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" required />
                </div>

                <h2 className="text-2xl font-bold py-7">About Blog</h2>
                <div className="pb-5">
                    <label className="block text-s font-semibold text-gray-700 pb-2">Blog HeadLine :</label>
                    <input type="text" name="HeadLine" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="pb-5">
                    <label className="block text-s font-semibold text-gray-700 pb-2">Blog Discription :</label>
                    <input type="text" name="Discription" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="pb-5">
                    <label className="block text-s font-semibold text-gray-700 pb-2">Blog Thumbnail (URL) :</label>
                    <input type="url" name="headImageURL" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" required />
                </div>

                <h2 className="text-2xl font-bold py-7">Blog Paragraphs</h2>
                <div className="pb-5">
                    {[...Array(totalParagraphs)].map((_, index) => (
                        <div key={index} className='pb-5'>
                            <label className="block text-s font-semibold text-gray-700 pb-2">
                                Paragraph {index + 1} :
                            </label>
                            <textarea
                                rows="4"
                                name={`paragraph-${index}`}
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    ))}

                    {totalParagraphs < 5 && (
                        <button
                            type="button"
                            className="mt-3 border px-6 py-2 rounded hover:bg-gray-100 transition w-[40px] h-[40px] flex justify-center items-center"
                            onClick={() => setTotalParagraphs(prev => prev + 1)}
                        >
                            +
                        </button>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 mt-5 rounded hover:bg-blue-700 transition w-[250px]"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}


export default ContributionForm;
