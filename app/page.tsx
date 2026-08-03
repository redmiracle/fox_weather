'use client'


export default function Home() {

  const newReq=async ()=>{
      const data=await fetch('api/preview?lat=32.0853&ln=34.7818')
      const res= await data.json()
      console.log(res)
  }

    newReq()

  return (
      <div>
        Hello

      </div>
  );
}
