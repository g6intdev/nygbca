"use server"
import { redirect } from "next/dist/server/api-utils";
import prisma from "../prisma";

/**
 * @returns info of group that was just created.
 * @throws new Error when creation of group fails
 */
export default async function createGroup(formData: FormData) {
  try {
    const groupName = String(formData.get('groupName'));
    const group = await prisma.group.create({
      data: {
        groupName,
      },
    });
    return group
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("creating group failed:", error);
    } else {
      throw new Error("unknown error occured");
    }
  }
  //  redirect(`/dashboard/groups/${group.groupId}`)
}