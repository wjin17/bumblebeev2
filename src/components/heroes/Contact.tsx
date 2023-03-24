import { useState } from 'react'
import { AiFillPhone, AiOutlineInstagram } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import { IoLogoTiktok } from 'react-icons/io5'

interface IContactHero {}

const ContactHero: React.FC<IContactHero> = () => {
  const [instructionsText, setInstructionsText] = useState(
    'Click email to copy'
  )

  function updateClipboard() {
    navigator.clipboard.writeText('hello@bumblebeeplayspace.com').then(
      function () {
        setInstructionsText('Copied!')
      },
      function (err) {
        console.error('Copy failed :c', err)
        /* clipboard write failed */
      }
    )
  }

  return (
    <section
      className="my-16 mx-auto flex h-full max-w-md flex-1 flex-col lg:my-auto"
      id="contact"
    >
      <h1 className="my-4 text-3xl font-bold">Find us at</h1>
      <a
        href="tel:510-894-0442"
        className="my-2 mr-auto flex items-center justify-center"
      >
        <div className="rounded-full border-2 border-neutral-400 p-2">
          <AiFillPhone size={32} color="rgb(163 163 163)" />
        </div>
        <h1 className="ml-8 text-xl hover:underline">510-894-0442</h1>
      </a>
      <div className="my-2 mr-auto flex items-center justify-center">
        <div className="rounded-full border-2 border-neutral-400 p-2">
          <MdOutlineMail size={32} color="rgb(163 163 163)" />
        </div>
        <div className="ml-8">
          <button
            className="button-nostyle"
            onClick={updateClipboard}
            onMouseOver={() => setInstructionsText('Click email to copy')}
            onFocus={() => setInstructionsText('Click email to copy')}
          >
            <h1 className="text-xl">
              hello{'\u0040'}bumblebeeplayspace{'\u002e'}com
            </h1>
          </button>
          <p className="text-sm text-neutral-400">{instructionsText}</p>
        </div>
      </div>
      <a
        className="my-2 mr-auto flex items-center justify-center hover:underline"
        href="https://www.facebook.com/bumblebee.playspace/"
        target="__blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full border-2 border-neutral-400 p-2">
          <RiFacebookFill size={32} color="rgb(163 163 163)" />
        </div>
        <div className="ml-8">
          <h1 className="text-xl">Facebook</h1>
        </div>
      </a>
      <a
        className="my-2 mr-auto flex items-center justify-center hover:underline"
        href="https://www.instagram.com/bumblebeeplayspace/"
        target="__blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full border-2 border-neutral-400 p-2">
          <AiOutlineInstagram size={32} color="rgb(163 163 163)" />
        </div>
        <div className="ml-8">
          <h1 className="text-xl">Instagram</h1>
        </div>
      </a>

      <a
        className="my-2 mr-auto flex items-center justify-center hover:underline"
        href="https://www.tiktok.com/@bumblebeeplayspace"
        target="__blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full border-2 border-neutral-400 p-2">
          <IoLogoTiktok size={32} color="rgb(163 163 163)" />
        </div>
        <div className="ml-8">
          <h1 className="text-xl">TikTok</h1>
        </div>
      </a>
    </section>
  )
}

export default ContactHero
