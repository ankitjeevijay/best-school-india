import School from "../../../../models/school";
import dbConnect from "../../../../utils/dbCon";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
      //  console.log('school data');
        await dbConnect()
       const schoolData =  await School.find()
        return NextResponse.json({
            msg: 'school data fetched  successfull',
            schoolData : schoolData,
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