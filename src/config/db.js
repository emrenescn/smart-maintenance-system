const mongoose=require("mongoose");
const connectDB=async ()=>{
    try{
            await mongoose.connect(process.env.MONGO_URI);//.env içerisindeki connection string ile db'ye bağlanmaya çalışır
            console.log("Bağlantı başarılı");

    }catch(error){
        console.error("MongoDB bağlantı hatası : ",error);
        process.exit(1);//bağlantı hatalıysa programı durdurur
    }
};
module.exports=connectDB; //bu fonksiyonu başka dosyalarda kullanabilmek için export ediyoruz.