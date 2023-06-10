import School from "../../../../models/school";
import dbConnect from "../../../../utils/dbCon";
import { NextResponse } from "next/server";

export async function GET(req, res) {
   
    try {
        console.log("hello");
        await dbConnect()
       const data = await School
       .findById (req.params.id)
        return NextResponse.json({
            msg: 'school data fetched  successfull',
            data : data,
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