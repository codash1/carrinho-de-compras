import { Product } from "@/Types/Product";

export const products:Product[] = [
    {
      id: 1,
      name: 'Apple',
      price: 1.5,
      category: 'Fruits',
      image: 'https://static.vecteezy.com/system/resources/previews/019/040/577/non_2x/an-8-bit-retro-styled-pixel-art-illustration-of-a-red-apple-free-png.png',
      description: 'A fresh red apple',
      quantity: 0 // Inicia como 0 fora do carrinho
    },
    {
      id: 2,
      name: 'Bread',
      price: 2.0,
      category: 'Bakery',
      image: 'https://i.pinimg.com/originals/b5/b7/41/b5b741072f38884eebde4d4447b9de66.png',
      description: 'A loaf of whole wheat bread',
      quantity: 0
    },
    {
      id: 3,
      name: 'Milk',
      price: 1.2,
      category: 'Dairy',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d09ac73d-eb31-448c-beb7-5cae85e4df26/dbq8eol-267a1e19-cbd1-48b3-af81-8274a3ebb84d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kMDlhYzczZC1lYjMxLTQ0OGMtYmViNy01Y2FlODVlNGRmMjYvZGJxOGVvbC0yNjdhMWUxOS1jYmQxLTQ4YjMtYWY4MS04Mjc0YTNlYmI4NGQucG5nIn1dXX0.PMMYSB6RLgVx9XaVhyL0iS61XqLjmIMrboOi5U1y1r0',
      description: '1L of whole milk',
      quantity: 0
    },
    {
      id: 4,
      name: 'Eggs',
      price: 2.5,
      category: 'Dairy',
      image: 'https://static.vecteezy.com/system/resources/previews/027/147/048/original/pixel-art-of-egg-png.png',
      description: 'A dozen fresh eggs',
      quantity: 0
    },
    {
      id: 5,
      name: 'Lamen',
      price: 3.0,
      category: 'Beverages',
      image: 'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/b4accc20cfd0d50.png',
      description: '1L of freshly squeezed orange juice',
      quantity: 0
    },
    {
      id: 6,
      name: 'Chicken Breast',
      price: 5.0,
      category: 'Meat',
      image: 'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/5dd41f9502fba06.png',
      description: '500g of skinless chicken breast',
      quantity: 0
    }
  ];
  