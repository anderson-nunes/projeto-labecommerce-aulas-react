import React from 'react'

const Footer = () => {

  return (
    <>
      <footer class="bg-gray-900 mt-4">
        <div class="max-w-2xl mx-auto text-white py-10">
          <div class="text-center">
            <h3 class="text-3xl mb-3">Baixe nosso aplicativo</h3>
            <p> E compre pelo seu celular. </p>
            <div class="flex justify-center my-10">
              <div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 cursor-pointer hover:bg-gray-800">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" />
                <div class="text-left ml-3 ">
                  <p class='text-xs text-gray-200'>Download on </p>
                  <p class="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div class="flex items-center border rounded-lg px-4 py-2 w-44 mx-2 cursor-pointer hover:bg-gray-800">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8" />
                <div class="text-left ml-3">
                  <p class='text-xs text-gray-200'>Download on </p>
                  <p class="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-18 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Anderson Ribeiro, 2023. </p>
            <div class="order-1 md:order-2">
              <span class="px-2 cursor-pointer hover:text-gray-500">Sobre nós</span>
              <span class="px-2 border-l cursor-pointer hover:text-gray-500">Contate-nos</span>
              <span class="px-2 border-l cursor-pointer hover:text-gray-500">Política de Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer