import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full mt-10 h-20 flex flex-row justify-center items-center">
      <div className="flex-grow h-full flex flex-row justify-end items-center">
        <a href="https://www.linkedin.com/in/malvetela/">
          <Image src="/images/In-Blue-128.png" width={25} height={25} />
        </a>
      </div>
      <div className="flex-grow h-full flex flex-row justify-center items-end">
        <Image src="/images/cat-footer.png" width={100} height={100} />
      </div>
      <div className="flex-grow h-full flex flex-row justify-start items-center">
        <a href="https://github.com/MattStela">
          <Image src="/images/github-mark-white.png" width={25} height={25} />
        </a>
      </div>
    </div>
  );
}
