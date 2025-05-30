import joinGroupLogic from "@/lib/group/joinGroupLogic"
import Form from "next/form"
import Link from "next/link"
import gt from "@/lib/lang/gt"

export default async function Page() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex justify-start">
          <Link className="btn" href={`/dashboard/group/`}>{await gt("group.group")}</Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mx-auto max-w-xs">
        <div className="prose">
          <h1 className="mb-2 text-center">{await gt("group.joinGroup")}</h1>
        </div>
        <Form action={joinGroupLogic} className="w-full">
          <div className="form-control mb-4 w-full">
            <label className="form-control w-full mb-4">
              <span className="label label-text w-full mb-4 text-center">{await gt("groupJoinId.inputJoinName")}</span>
              <input type="text" name="joinName" placeholder={await gt("groupJoinId.joinCode")} className="input input-bordered w-full" required />
            </label>
          </div>
          <button className="btn btn-primary mb-2 w-full" type="submit">{await gt("terms.submit")}</button>
          <Link className="btn btn-neutral mb-2 w-full" href="./">{await gt("terms.cancel")}</Link>
        </Form>
      </div>
    </>

  )
}