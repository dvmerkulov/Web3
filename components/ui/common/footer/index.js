



export default function Footer() {

  return (
    <footer className="bg-gray-800 pt-1 mt-10">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-6">
            <a href="mailto: dmerkulov@inbox.ru" className="mb-6 text-white text-sm text-primary-2 font-bold">
                © {new Date().getFullYear()} Dmitry Merkulov,   dmerkulov@inbox.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
