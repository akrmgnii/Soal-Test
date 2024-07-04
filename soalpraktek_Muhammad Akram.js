function StockPicker(arr) { 
    var keuntungan=-1; // keuntungan maksimal -1
    var hargabeli=arr[0]; // inisialisasi harga beli ke elemen pertama array
    for(var i=1; i<arr.length; i++){ // mengulangi array mulai dari elemen kedua
        if(arr[i]<hargabeli){ // jika element ini lebih kecil dari harga beli
            hargabeli=arr[i]; // memperbarui harga beli
        }
        else if( (arr[i]-hargabeli) > keuntungan){ // jika membeli saham paaada saat ini akan membuat keuntungan lebih besar
            keuntungan=arr[i]-hargabeli; // memperbarui harga beli
        }
    }
    
  return keuntungan; // mengembalikan keuntungan maksimal
}
   
// keep this function call here 
console.log(StockPicker(readline()));

//Menghitung keuntungan maksimal yang bisa diperoleh dengan membeli dan menjual saham pada waktu yang tepat.
//Fungsi ini mengambil serangkaian harga saham sebagai masukan dan melakukan iterasi melalui larik tersebut untuk menemukan keuntungan maksimum yang dapat dicapai dengan membeli pada harga lebih rendah dan menjual pada harga lebih tinggi di kemudian hari dalam larik tersebut.