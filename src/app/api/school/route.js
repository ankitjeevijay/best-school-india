import School from "../../../../models/school";
import dbConnect from "../../../../utils/dbCon";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json()
        // console.log(body)
        await dbConnect()
        await School.create(body)
        return NextResponse.json({
            msg: 'School Add successfull'
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(
            { message: "server error, please try again !" },
            { status: 500 }
        )
    }
}