import { FC } from 'react'
import {
 HiOutlineSearch,
 HiOutlineTrendingUp,
 HiOutlineStar,
} from 'react-icons/hi'
import Autocomplete from '../../components/Autocomplete'
import test111 from '../../assets/images/test.jpg'

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
 return (
  <div>
   <div className="px-24 bg-[#e3e5ff]/10 pb-4 pt-4  ">
    <div className="border-2 border-slate-400 py-4 rounded-lg px-4 flex flex-col">
     <div className="flex gap-2 items-center text-[#4388A5]">
      <HiOutlineSearch className="h-8 w-8 " />
      <h4 className="text-xl">Research</h4>
     </div>
     <div className="flex gap-12 mt-4">
      <div className="flex flex-col ">
       <label className="font-semibold" htmlFor="">
        Địa điểm
       </label>
       <Autocomplete width="240px" />
      </div>

      <div className="flex flex-col ">
       <label className="font-semibold" htmlFor="">
        Đặc điểm
       </label>
       <Autocomplete width="240px" />
      </div>
      <div className=" mt-auto">
       <button className="px-4 py-1.5 rounded-md bg-blue-600 text-white  flex gap-1 items-center hover:bg-blue-400 transition-all duration-200">
        <HiOutlineSearch className="h-5 w-5 " />
        <span>Search</span>
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="px-24 py-4">
    <div className="flex gap-2 items-center text-[#494edc]">
     <HiOutlineTrendingUp className="h-8 w-8 " />
     <h4 className="text-xl">Đề xuất</h4>
    </div>
    <div className="mt-4 grid grid-cols-4 gap-8">
     <div
      className="col-span-1 rounded-md min-h-20 bg-slate-100 overflow-hidden group cursor-pointer flex flex-col 
shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="h-50 w-full overflow-hidden group-hover:scale-110 transition-all duration-300">
       <img className="h-full w-full object-cover " src={test111} alt="" />
      </div>
      <div className="px-4 py-2 flex flex-col">
       <h4 className="text-xl font-semibold">Đà nẵng</h4>
       <i className="font-thin ">
        Đà Nẵng không chỉ gây ấn tượng với du khách với hình ảnh năng
       </i>
       <div className="flex gap-1 mt-1.5">
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
       </div>
      </div>
     </div>

     <div
      className="col-span-1 rounded-md min-h-20 bg-slate-100 overflow-hidden group cursor-pointer flex flex-col 
shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="h-50 w-full overflow-hidden group-hover:scale-110 transition-all duration-300">
       <img className="h-full w-full object-cover " src={test111} alt="" />
      </div>
      <div className="px-4 py-2 flex flex-col">
       <h4 className="text-xl font-semibold">Đà nẵng</h4>
       <i className="font-thin ">
        Đà Nẵng không chỉ gây ấn tượng với du khách với hình ảnh năng
       </i>
       <div className="flex gap-1 mt-1.5">
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
       </div>
      </div>
     </div>

     <div
      className="col-span-1 rounded-md min-h-20 bg-slate-100 overflow-hidden group cursor-pointer flex flex-col 
shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="h-50 w-full overflow-hidden group-hover:scale-110 transition-all duration-300">
       <img className="h-full w-full object-cover " src={test111} alt="" />
      </div>
      <div className="px-4 py-2 flex flex-col">
       <h4 className="text-xl font-semibold">Đà nẵng</h4>
       <i className="font-thin ">
        Đà Nẵng không chỉ gây ấn tượng với du khách với hình ảnh năng
       </i>
       <div className="flex gap-1 mt-1.5">
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
       </div>
      </div>
     </div>

     <div
      className="col-span-1 rounded-md min-h-20 bg-slate-100 overflow-hidden group cursor-pointer flex flex-col 
shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="h-50 w-full overflow-hidden group-hover:scale-110 transition-all duration-300">
       <img className="h-full w-full object-cover " src={test111} alt="" />
      </div>
      <div className="px-4 py-2 flex flex-col">
       <h4 className="text-xl font-semibold">Đà nẵng</h4>
       <i className="font-thin ">
        Đà Nẵng không chỉ gây ấn tượng với du khách với hình ảnh năng
       </i>
       <div className="flex gap-1 mt-1.5">
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
       </div>
      </div>
     </div>

     <div
      className="col-span-1 rounded-md min-h-20 bg-slate-100 overflow-hidden group cursor-pointer flex flex-col 
shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="max-h-50 w-full overflow-hidden group-hover:scale-110 transition-all duration-300">
       <img className="h-full w-full object-cover " src={test111} alt="" />
      </div>
      <div className="px-4 py-2 flex flex-col">
       <h4 className="text-xl font-semibold">Đà nẵng</h4>
       <i className="font-thin ">
        Đà Nẵng không chỉ gây ấn tượng với du khách với hình ảnh năng
       </i>
       <div className="flex gap-1 mt-1.5">
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
        <HiOutlineStar className="h-4 w-4 text-yellow-500 " />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Home
