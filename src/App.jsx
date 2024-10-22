import { useState } from 'react'

import './App.css'
import Container from './componentes/Container'
import Flex from './componentes/Flex'
import Image from './componentes/Image'
import Logo from './assets/Logo.png'
import Model from './assets/Model.png'
import Sweats from './assets/Sweats.png'
import Jeans from './assets/Jeans.png'
import Sweetmodel from './assets/Sweetmodel.png'
import Modelone from './assets/Modelone.png'
import Modeltwo from './assets/Modeltwo.png'
import Baskets from './assets/Baskets.png' 
import Menu from './componentes/Menu'
import Button from './componentes/Button'
import Heading from './componentes/Heading'
import { IoStarSharp } from "react-icons/io5";


function App() {
  

  return (
    <>
  <div className="bg-headerBg py-5">
    <Container>
      <Flex>
        <div className="w-[10%] pt-2">
          <Image imgSrc={Logo}/>
        </div>
        <div className="w-[60%] pt-4">
          <Flex className={'justify-center gap-x-4'}>
         <Menu menuName={'Men'}/>
         <Menu menuName={'Woman'}/>
         <Menu menuName={'Kids'}/>
         <Menu menuName={'Collection'}/>
         <Menu menuName={'Trends'}/>
          </Flex>
        </div>
        <div className="w-[30%]">
          <Button btnName={"Login"} className={'py-[15px] px-[30px] hover:bg-btnHover hover:rounded-xl mr-2 drop-shadow-2xl border-btnBdr broder'}/>
          <Button btnName={"Sign up"} className={'py-[15px] px-[30px] hover:bg-btnHover hover:rounded-xl drop-shadow-2xl border-btnBdr broder'}/>
        </div>
      </Flex>
    </Container>
  </div>
  {/* Header Part End */}
  <div className="bg-headerBg py-[115px]">
    <Container>
      <Flex>
        <div className='w-1/2'>
        <Heading as={'h1'} text={"Find The Best Fashion Style For You"} className={'text-[64px] font-pop font-bold pr-28'}/>
        <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} className={'text-[22px] font-pop leading-9 pr-40 py-6'}/>
        <Button btnName={"SHOP NOW"} className={'bg-black text-white py-[25px] px-[70px] rounded-lg uppercase '}/>
        </div>
        <div className='w-1/2'>
        <Image imgSrc={Model}/>
        </div>
      </Flex>
    </Container>
  </div>
  {/* Banner Part End */}
  <div className="pt-[212px] pb-[160px]">
    <Container>
      <Heading as={"h1"} text={"New Collection"} className={'text-center font-Frank font-bold text-[64px] pb-[80px]'}/>
      <Flex className={"justify-between"}>
        <div className="w-[370px] rounded-xl relative">
          <Image imgSrc={Sweats}/>
          <Button btnName={"Sweater"} className={'bg-white rounded-xl py-[10px] px-[85px] absolute left-1/2 bottom-10 -translate-x-1/2'}/>
        </div>
        <div className="w-[370px] rounded-xl relative">
          <Image imgSrc={Jeans}/>
          <Button btnName={"Jeans"} className={'bg-white rounded-xl py-[10px] px-[85px] absolute left-1/2 bottom-10 -translate-x-1/2'}/>
        </div>
        <div className="w-[400px] rounded-xl relative">
          <Image imgSrc={Baskets}/>
          <Button btnName={"Baskets"} className={'bg-white rounded-xl py-[10px] px-[85px] absolute left-1/2 bottom-10 -translate-x-1/2'}/>
        </div>
      </Flex>
    </Container>
  </div>
  { /* Collection Part End */}
  <div className="pt-[100px] pb-[250px] relative">
    <Container>
      <Flex>
        <div className="w-1/2 z-10">
        <Image imgSrc={Sweetmodel}/>
        </div>
        <div className='w-1/2 pl-[130px]'>
        <Heading as={'h1'} text={"Best Fashion Since 2010"} className={'text-[64px] font-pop font-bold'}/>
        <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} className={'text-[22px] font-pop leading-9 py-6 pr-32 pb-[148px]'}/>
        <div className="w-[700px] bg-headerBg py-[44px] rounded-xl text-center absolute bottom-[90px] right-[90px] ">
        <Flex className={"justify-between"}>
          <div className="w-1/3 border-r-2 border-black">
          <Heading as={"h3"} text={"2010"} className={'text-[64px] font-pod font-bold'}/>
          <Heading as={"p"} text={"Founded"} className={'text-[28px] font-pop font-medium'}/>
          </div>
          <div className="w-1/3 border-r-2 border-black">
          <Heading as={"h3"} text={"5000+"} className={'text-[64px] font-pod font-bold'}/>
          <Heading as={"p"} text={"Product Sold"} className={'text-[28px] font-pop font-medium'}/>
          </div>
          <div className="w-1/3">
          <Heading as={"h3"} text={"4500+"} className={'text-[64px] font-pod font-bold'}/>
          <Heading as={"p"} text={"Best Reviews"} className={'text-[28px] font-pop font-medium'}/>
          </div>
        </Flex>
      </div>
        </div>
      </Flex>
    </Container>
  </div>
  { /* Counter Part End */}
  <div className="bg-bestBg pt-[45px] pb-[150px]">
    <Container>
      <Flex className={"justify-between"}>
        <div className="w-[40%]">.
        <Heading as={'h1'} text={"Best Seller Product"} className={'text-[64px] font-pop font-bold text-white pl-[50px]'}/>
        <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} className={'text-[22px] font-pop leading-9 px-[50px] py-[50px] text-white'}/>
        <Button btnName={"Learn MORE"} className={'bg-black text-white py-[25px] px-[70px] rounded-lg uppercase ml-[30px]'}/>
        </div>
        <div className="w-[30%]">
        <Image imgSrc={Modelone}/>
        <div className="w-[367px] bg-white py-2 px-4">
        <Flex>
        <IoStarSharp className={'text-iconsColor mr-2 '}/>
        <IoStarSharp className={'text-iconsColor mr-2'}/>
        <IoStarSharp className={'text-iconsColor mr-2'}/>
        <IoStarSharp className={'text-iconsColor mr-2'}/>
        <IoStarSharp className={'text-iconsColor'}/> 
        </Flex>   
        <Heading as={'h3'} text={"Sweater Shirt"} className={'text-[22px] font-pop font-semibold py-1'}/>  
        <Flex>
          <div className="w-1/2">
          <Heading as={"h3"} text={"$45.99"} className={'text-[24px] font-pop text-dColor'}/>
          </div>
          <div className="w-1/2">
          <Heading as={"h3"} text={"$35.99"} className={'text-[24px] font-pop '}/>
          </div>
          </Flex> 
        </div>
        </div>
        <div className="w-[30%]">
        <Image imgSrc={Modeltwo}/>
        <div className="w-[367px] bg-white py-2 px-4">
        <Flex>
        <IoStarSharp className={'text-iconsColor mr-2 '}/>
        <IoStarSharp className={'text-iconsColor mr-2'}/>
        <IoStarSharp className={'text-iconsColor mr-2'}/>
        <IoStarSharp className={'text-iconsColor mr-2'}/>
        <IoStarSharp className={'text-iconsColor'}/> 
        </Flex>   
        <Heading as={'h3'} text={"Pants fashion"} className={'text-[22px] font-pop font-semibold py-1'}/>  
        <Flex>
          <div className="w-1/2">
          <Heading as={"h3"} text={"$55"} className={'text-[24px] font-pop text-dColor'}/>
          </div>
          <div className="w-1/2">
          <Heading as={"h3"} text={"$44.99"} className={'text-[24px] font-pop '}/>
          </div>
          </Flex> 
        </div>
        </div>
      </Flex>
    </Container>
  </div>
  { /* Best Seller Part End */}
    </>
  )
}

export default App
