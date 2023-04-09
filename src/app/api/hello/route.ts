import { NextRequest, NextResponse } from "next/server";
import MindsDB from "mindsdb-js-sdk";
// import mysql from "mysql";

const { MINDSDB_USER, MINDSDB_PASSWORD } = process.env;

export async function GET(request: NextRequest) {
  return new Response("Hello, Next.js!");
}

export async function POST(request: NextRequest) {
  try {
    await MindsDB.connect({
      user: MINDSDB_USER ?? "",
      password: MINDSDB_PASSWORD ?? "",
    });

    const reqBody = await request.json();

    const query = `SELECT * FROM mindsdb.get_keywords WHERE text='${reqBody.text}'`;

    try {
      const queryResult = await MindsDB.SQL.runQuery(query);

      if (queryResult.type === "error") {
        throw new Error(queryResult.error_message);
      }

      if (queryResult.rows.length > 0) {
        const matchingUserRow = queryResult.rows[0];
        return NextResponse.json(matchingUserRow);
      }
    } catch (error) {
      // Something went wrong sending the API request or executing the query.
      console.log(error);
    }
  } catch (error) {
    // Failed to authenticate.
    console.log(error);
  }
}
