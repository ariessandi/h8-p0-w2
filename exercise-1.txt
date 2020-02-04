HUKUM NEWTON

DEKLARASI
float f
float m
float a

START

m<-600
a<-2

READ(a,m)

Hitung resultan Gaya

f<- a * m

END



TAHUN KABISAT

Deklarasi :

int tahun
int hasil



Deskripsi :
Start
Read ('tahun')

IF (( tahun MOD 4 == 0 )AND (tahun MOD 100 != 0 )) 
THEN PRINT "Tahun Kabisat"
ELSE IF (( tahun MOD 4 == 0 )AND (tahun MOD 100 == 0 ) AND (tahun MOD 400 == 0 )) 
THEN PRINT "Tahun Kabisat"
ELSE PRINT "Bukan Tahun Kabisat"
END IF
End


MESIN CUCI

Deklarasi 
int jum_pakaian 
int jum_akhir
START

jum_pakaian <- 1
jum_akhir <- 20

READ(jum_pakaian,jum_akhir)

WHILE(jum_pakaian<= jum_akhir)

	IF (jum_pakaian == jum_akhir)
		THEN write('nyalakan mesin cuci')
	END IF

	jum_pakaian <- jum_pakaian + 1

END WHILE

END


KUKU SISWA

Deklarasi 
int jum_siswa
int jum_akhir
str jenis_kuku
START

jum_siswa <- 1
jum_akhir <- 40

READ(jum_siswa,jum_akhir,jenis_kuku)

WHILE(jum_siswa <= jum_akhir)

	IF (jenis_kuku=="panjang")
		THEN write('siswa di hukum')
	END IF

	jum_siswa<- jum_siswa + 1

END WHILE

END