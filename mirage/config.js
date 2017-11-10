export default function() {
  this.namespace = '/api';

  let products = [
  {
                           type: 'product',
                           id: 'grand-old-mansion',
                           attributes: {
                             name: 'Grand Old Mansion',
                             description: 'Veruca Salt',
                             category: 'San Francisco',
                             sizes: [10, 12],
                             image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
                           }
                         }, {
                           type: 'product',
                           id: 'urban-living',
                           attributes: {
                             name: 'Urban Living',
                             description: 'Mike Teavee',
                             category: 'Seattle',
                             sizes: [10, 12],
                             image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
                           }
                         }, {
                           type: 'product',
                           id: 'downtown-charm',
                           attributes: {
                             name: 'Downtown Charm',
                             description: 'Violet Beauregarde',
                             category: 'Portland',
                             sizes: [10, 12],
                             image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
                           }
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
}
