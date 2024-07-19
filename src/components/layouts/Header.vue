<template>
    <header class="bg-zinc-950 shadow text-white ">
        <div class="container mx-auto px-0 py-0 flex items-center justify-between">
            <div>
                <a href="#">
                    <img src="./../../assets/img/logoE-shop.jpg" alt="Logo E-Shop" class="w-[200px]">
                </a>
            </div>
            <div>
                <input type="text" class="rounded-full px-6 py-3 w-96 text-black"
                    name="buscadorProdutos" id="buscadorProdutos" placeholder="Encontre aqui as melhores ofertas">
            </div>
            <div>
                <button class="rounded-full hover:bg-white hover:text-black border px-3 py-1">
                    Entre ou cadastre-se <br>
                    <small>Para ver seus pedidos</small>
                </button>
            </div>
            <div>
                <button title="Favoritos" class="px-6">
                    <i class="fa-solid fa-heart text-3xl"></i>
                </button>
                <button title="Carrinho">
                    <i class="fa-regular fa-cart-shopping text-3xl"></i>
                </button>
            </div>
        </div>
        <div class="">
            <nav class="px-4 py-6 flex items-center justify-between">
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Departamentos</a>
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Cupom</a>
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Cartão Loja</a>
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Marketplace</a>
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Anunciadas na TV</a>
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Retira Rápido</a>
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Pague com Pix</a>
                <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Serviço</a>
            </nav>
        </div>
    </header>
  </template>
  
  <script>
    export default {
        name: 'Header',
    };
  </script>
  
  <style scoped>
  </style>
  