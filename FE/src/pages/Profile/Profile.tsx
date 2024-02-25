import axios from 'axios'
import { FC, useEffect, useState } from 'react'

interface Props {}

const Profile: FC<Props> = (): JSX.Element => {
 const [isEdit, setIsEdit] = useState<boolean>(false)
 //  const callApi = async (): Promise<void> => {
 //   try {
 //    const res = await axios.get(
 //     'https://egret-quiet-orca.ngrok-free.app/api/v1/users/profile',
 //     {
 //      headers: {
 //       'ngrok-skip-browser-warning': 'true',
 //       token: `oyx0fFoykYnRnfLDozvysNIG7sHML9Iy`,
 //      },
 //     },
 //    )
 //    if (res) {
 //    }
 //   } catch (err) {
 //    console.log(err)
 //   }
 //  }

 //  useEffect(() => {
 //   callApi()
 //  }, [])
 return (
  <div className="p-4 bp-4  border border-gray-300 rounded-xl flex flex-col">
   <h4 className="text-2xl font-semibold text-[#19245D] mb-4">
    Thông tin cá nhân
   </h4>

   <div className="grid grid-cols-12 items-center py-2.5 border-t border-b border-gray-300 px-4">
    <label
     className="col-span-3 font-semibold text-xl text-[#19245D] py-0"
     htmlFor="">
     Họ và tên
    </label>

    {isEdit ? (
     <div className="col-span-9">
      <input
       className="border border-gray-400 outline-none px-2 py-0.5 rounded-md"
       placeholder="Nguyễn Văn Thịnh"
       type="text"
      />
     </div>
    ) : (
     <span className="col-span-9 text-xl">Nguyễn Văn Thịnh</span>
    )}
   </div>

   <div className="grid grid-cols-12 items-center py-2.5 border-b border-gray-300 px-4">
    <label
     className="col-span-3 font-semibold text-xl text-[#19245D] py-0"
     htmlFor="">
     Email
    </label>
    <span className="col-span-9 text-xl">thinh209202@gmail.com</span>
   </div>

   <div className="grid grid-cols-12 items-center py-2.5 border-b border-gray-300 px-4">
    <label
     className="col-span-3 font-semibold text-xl text-[#19245D] py-0"
     htmlFor="">
     Số điện thoại
    </label>

    {isEdit ? (
     <div className="col-span-9">
      <input
       className="border border-gray-400 outline-none px-2 py-0.5 rounded-md"
       placeholder="0923836659"
       type="text"
      />
     </div>
    ) : (
     <span className="col-span-9 text-xl">0923836659</span>
    )}
   </div>

   <div className="grid grid-cols-12 items-center py-2.5 border-b border-gray-300 px-4">
    <label
     className="col-span-3 font-semibold text-xl text-[#19245D] py-0"
     htmlFor="">
     Giới tính
    </label>
    {isEdit ? (
     <div className="col-span-9 flex items-center gap-2">
      <input type="radio" id="Nam" name="GT" value="Nam" />
      <label>Nam</label>
      <input className="ml-4" type="radio" id="Nu" name="GT" value="Nu" />
      <label>Nữ</label>
     </div>
    ) : (
     <span className="col-span-9 text-xl">Nam</span>
    )}
   </div>

   <div className="grid grid-cols-12 items-center py-2.5 border-b border-gray-300 px-4">
    <label
     className="col-span-3 font-semibold text-xl text-[#19245D] py-0"
     htmlFor="">
     Ngày sinh
    </label>
    {isEdit ? (
     <div className="col-span-9">
      <input
       className="border border-gray-400 outline-none px-2 py-0.5 rounded-md w-52"
       placeholder="0923836659"
       type="date"
      />
     </div>
    ) : (
     <span className="col-span-9 text-xl">12/03/2002</span>
    )}
   </div>

   <div className="grid grid-cols-12 items-center py-2.5 border-b border-gray-300 px-4">
    <label
     className="col-span-3 font-semibold text-xl text-[#19245D] py-0"
     htmlFor="">
     Địa chỉ
    </label>
    {isEdit ? (
     <div className="col-span-9">
      <input
       className="border border-gray-400 outline-none px-2 py-0.5 rounded-md w-96"
       placeholder="0923836659"
       type="text"
      />
     </div>
    ) : (
     <span className="col-span-9 text-xl">127 Nguyễn Lương Bằng, Đà Nẵng</span>
    )}
   </div>

   <div className="mt-6 flex">
    {isEdit ? (
     <div className="ml-auto flex gap-2">
      <button className=" px-4 py-1.5 rounded-md bg-red-600 text-white  flex gap-1 items-center hover:bg-blue-400 transition-all duration-200">
       <span onClick={() => setIsEdit(false)}>Hủy</span>
      </button>
      <button className=" px-4 py-1.5 rounded-md bg-green-600 text-white  flex gap-1 items-center hover:bg-blue-400 transition-all duration-200">
       <span onClick={() => setIsEdit(false)}>Lưu</span>
      </button>
     </div>
    ) : (
     <button className="ml-auto px-4 py-1.5 rounded-md bg-blue-600 text-white  flex gap-1 items-center hover:bg-blue-400 transition-all duration-200">
      <span onClick={() => setIsEdit(true)}>Chỉnh sửa</span>
     </button>
    )}
   </div>
  </div>
 )
}

export default Profile
