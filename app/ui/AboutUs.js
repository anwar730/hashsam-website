import Image from "next/image";

export default function WhoWeAre() {
  return (
    <>
    <section className="overflow-hidden bg-gray-100 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-200 py-12 md:py-16 px-4 sm:px-8 md:px-12">
      <div data-aos="fade-left" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-36 md:gap-18">
        {/* Image Section */}
        <div className="w-5/6 md:w-1/2 overflow-hidden rounded-tl-[100px]">
          <Image
            src="/Leonardo_Kino_XL_female_black_doctor_smiling_2 (1).jpg" // Replace with actual image path
            alt="Klinikum team working together"
            width={500}
            height={500}
            className="object-cover rounded-tl-[300px] rounded-tr-[300px]"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            From Local Care to Global Impact
          </h2>
          <p className="mt-4 text-sm md:text-lg text-gray-700 leading-relaxed max-w-prose">
            At Klinikum Health Care, we are redefining the future of healthcare by bridging innovation and compassion. From telemedicine solutions to efficient hospital management systems, our mission is to empower healthcare providers and enhance patient outcomes worldwide.
          </p>
        </div>
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#E5E7EB" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,96C384,75,480,53,576,42.7C672,32,768,32,864,64C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CCFBF1" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,181.3C384,203,480,181,576,160C672,139,768,117,864,106.7C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    </>
  );
}
