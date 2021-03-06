const db1 = require('./Bezopasnost_dorozhnogo_dvizhenija.json')
const db2 = require('./Dorozhnaja_set.json')
const db3 = require('./Obschesistemnye_mery_razvitija_dorozhnogo_hozjajstva.json')
const db4 = require('./Obespechenie_kachestvenno_novogo_urovnja_razvitija_infrastruktury_kultury_(«Kulturnaja_sreda»).json')
const db5 = require('./Sozdanie_uslovij_dlja_realizatsii_tvorcheskogo_potentsiala_natsii_(«Tvorcheskie_ljudi»).json')
const db6 = require('./Tsifrovizatsija_uslug_i_formirovanie_informatsionnogo_prostranstva_v_sfere_kultury_(«Tsifrovaja_kultura»).json')
const db7 = require('./Informatsionnaja_bezopasnost.json')
const db8 = require('./Informatsionnaja_infrastruktura.json')
const db9 = require('./Kadry_dlja_tsifrovoj_ekonomiki.json')
const db10 = require('./Tsifrovoe_gosudarstvennoe_upravlenie.json')
const db11 = require('./Tsifrovye_tehnologii.json')

const news = require('./newsdata.json')

export const newsList = [news]

const dataBKAD = []

dataBKAD.push(db1,db2,db3)
dataBKAD.forEach((obj, id) => obj.url_protocol=`bkad${id}`)

for(let i=0; i<dataBKAD.length; i++){
	dataBKAD[i]['Director_img']="http://fs01.cap.ru/www20/mintrans/person/4c2d4bf5-5976-4fd3-a978-64f50186cdd3/by3a8335-fqnoohvr_gtv3cu4v.jpg";
	dataBKAD[i]['Curator_img']="https://im0-tub-ru.yandex.net/i?id=3df856faebd5623cacf97583e9ca691a&n=13";
}

dataBKAD[0]['Admin_img']='http://fs01.cap.ru/www20/mintrans/person/92c57cd6-574e-40e8-a5d6-a7329693501d/by3a8475_jqyvpq0z.jpg';
dataBKAD[1]['Admin_img']='http://fs01.cap.ru/www20/mintrans/person/16198459-eb4f-4e3d-a575-7710fa70b858/by3a8435_jrx0sx4r.jpg';
dataBKAD[2]['Admin_img']='http://fs01.cap.ru/www20/mintrans/person/16198459-eb4f-4e3d-a575-7710fa70b858/by3a8435_jrx0sx4r.jpg';

const BKAD = {
	natProjectsName: 'Безопасные и качественные автомобильные дороги',
  natProjectsDes: {
    time: 'до 31.12.2024',
    budget: '4 779,7 млрд руб.',
    par: 'Сделать комфортным и безопасным передвижение по российским дорогам. Отремонтировать региональные и муниципальные дороги, а также дороги в военных городках. Ликвидировать места концентрации ДТП, внедрить интеллектуальные системы управления движением, усилить контроль за соблюдением ПДД. В итоге смертность на дорогах должна сократиться в три раза'
  },
  natProjectsUrl: 'bkad',
	regPrjcts: dataBKAD
}

db4.Name_Project='Культурная среда'
db5.Name_Project='Творческие люди'
db6.Name_Project='Цифровая культура'

const dataCUL = []

dataCUL.push(db4,db5,db6)
dataCUL.forEach((obj, id) => obj.url_protocol=`cul${id}`)

for(let i=0; i<dataCUL.length; i++){
	dataCUL[i]['Director_img']="https://russiaedu.ru/media/cache/image_md_resize/uploads/upload-images/2019/07/30/0BfX0obqwVA.jpg";
	dataCUL[i]['Curator_img']="http://gov.cap.ru/home/132/deputati/okrug/foto5/024.jpg";
	dataCUL[i]['Admin_img']="https://upload.cheb.ru/uploads/473021/kwdfRKuyP0kOxjAuiwiNVA==/fullview/zernova.jpg";
}

const CUL = {
	natProjectsName: 'Культура',
  natProjectsDes: {
    time: 'до 31.12.2024',
    budget: '113,5 млрд руб.',
    par: 'Сделать культуру доступной не только в крупных городах, но и в отдаленных населенных пунктах по всей стране. Увеличить посещаемость учреждений культуры на 15%, а число обращений к культурным цифровым ресурсам — пять раз. Поддерживать творческие инициативы в регионах и создавать перспективный кадровый резерв. Наполнять новым смысловым содержанием сельские учреждения культуры, культурно-досуговые учреждения, библиотеки'
  },
  natProjectsUrl: 'cul',
	regPrjcts: dataCUL
}

const dataDE = []
dataDE.push(db7,db8,db9,db10,db11)
dataDE.forEach((obj, id) => obj.url_protocol=`dig-eco${id}`)

for(let i=0; i<dataDE.length; i++){
	dataDE[i]['Director_img']="http://info.cap.ru/UserContent/info/Person/2018_06/dsc_2157.JPG";
	dataDE[i]['Curator_img']="http://rufincontrol.ru/upload/iblock/3a3/60_1.png";
	dataDE[i]['Admin_img']="https://im0-tub-ru.yandex.net/i?id=4983fd32a16b3d30d99d7cfc25f21b59&n=13";
}

dataDE[0]['Admin_img']="http://info.cap.ru/UserContent/info/Person/2017_06/DSC_8946.JPG";
dataDE[1]['Admin_img']="http://info.cap.ru/UserContent/info/Person/2017_06/DSC_8946.JPG";

const DE = {
	natProjectsName: 'Цифровая экономика',
  natProjectsDes: {
    time: 'до 31.12.2024',
    budget: '1 837,7 млрд руб.',
    par: 'Сделать интернет доступным для всех и каждого. Покрыть связью 5G крупнейшие города. Защитить информацию граждан, бизнеса и государства. Повысить эффективность основных отраслей экономики за счет внедрения новых технологий. Подготовить кадры будущего с учетом сквозной цифровизации. Простимулировать инвестиции в новые сферы, увеличив долю затрат на развитие цифровой экономики в ВВП в три раза.'
  },
  natProjectsUrl: 'digeco',
	regPrjcts: dataDE
}

export const dat = [BKAD, CUL, DE]

