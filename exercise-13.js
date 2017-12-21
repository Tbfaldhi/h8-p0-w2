var input = [
                ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
                ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
                ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
                ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
            ]

var form = [
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: '],
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: '],
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: '],
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: ']
            ]

for (var i=0, len=input.length; i<len; i++) {
    // inner loop applies to sub-arrays
    for (var j=0, len2=input[i].length; j<len2; j++) {
        // accesses each element of each sub-array in turn
         for (var i=0, len=form.length; i<len; i++) {
    // inner loop applies to sub-arrays
    for (var j=0, len2=form[i].length; j<len2; j++) {
        // accesses each element of each sub-array in turn
        console.log( form[i][j]+input[i][j])
    }
}

    }
}
