
import { useFormStatus } from 'react-dom'

const BtnSubmit = ({ title }: { title: string }) => {
    const { pending } = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending}
            className='flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
            disabled={pending}
        >
            {pending ? <div className="inline-block animate-spin ease duration-300 w-6 h-6 border-t-4 border-red-600 border-solid rounded-full"></div>
                : `${title}`}
        </button>

    )
}

export default BtnSubmit