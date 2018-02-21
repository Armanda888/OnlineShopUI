export default function() {
  this.namespace = '/';

  let products = [
  {
                           type: 'product',
                           id: 'product1',
                           attributes: {
                             name: 'Grand Old Mansion',
                             description: 'Veruca Salt',
                             category: 'San Francisco',
                             sizes: [10, 12],
                             productImages: ['https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
                             'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'],
                             smallImages: ['bundle1_small.jpg', 'bundle2_small.jpg']
                           }
                         }, {
                           type: 'product',
                           id: 'product2',
                           attributes: {
                             name: 'Urban Living',
                             description: 'Mike Teavee',
                             category: 'Seattle',
                             sizes: [10, 12],
                             productImages: ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
                             'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'],
                             smallImages: ['bundle1_small.jpg', 'bundle2_small.jpg']
                           }
                         }, {
                           type: 'product',
                           id: 'product3',
                           attributes: {
                             name: 'Downtown Charm',
                             description: 'Violet Beauregarde',
                             category: 'Portland',
                             sizes: [10, 12],
                             productImages: ['https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'],
                             smallImages: ['bundle1_small.jpg', 'bundle2_small.jpg']
                           }
                         },
                         {
                             type: 'product',
                             id: 'product4',
                             attributes: {
                               name: 'Downtown ',
                               description: 'Violet Beauregarde',
                               category: 'Portland',
                               sizes: [11],
                               productImages: ['https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'],
                               smallImages: ['bundle1_small.jpg', 'bundle2_small.jpg']
                             }
                           },
                           {
                                type: 'product',
                                id: 'product5',
                                attributes: {
                                  name: ' Charm',
                                  description: 'Violet Beauregarde',
                                  category: 'Portland',
                                  sizes: [14],
                                  productImages: ['https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'],
                                  smallImages: ['bundle1_small.jpg', 'bundle2_small.jpg']
                                }
                              }
  ]

  let shoppingCartItems = [
  {
    "id": "1",
    "productId": "product1",
    "quantity": 1,
    "name": "items1",
    "price": 80,
    "salePrice": 60,
    "description": "test item 1"
  },
  {
      "id": "2",
      "productId": "product2",
      "quantity": 2,
      "name": "items2",
      "price": 90,
      "salePrice": 70,
      "description": "test item 2"
    },
    {
        "id": "3",
        "productId": "product3",
        "quantity": 1,
        "name": "items3",
        "price": 70,
        "salePrice": 650,
        "description": "test item 3"
      }
  ]

  this.get('/products', function() {
    return {
      data: products
    };
  });

  this.get('/products', function(db, request) {
      if(request.queryParams.category !== undefined) {
        let filteredProducts = products.filter(function(i) {
          return i.attributes.category.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        });
        return { data: filteredProducts };
      } else {
        return { data: products };
      }
    });
    this.del('/product/:id', function(db, request) {
        //var id = request.params.id;
        //var product = db.get(id);

        return products[0];
      });
  this.get('/shoppingcarts/cart1', function(db) {
    return { data: {
      id: 'cart1',
      items: shoppingCartItems
    }}
  });
}
