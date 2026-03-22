const app=require("./src/app"); //express app'yi import ettik
const PORT=process.env.PORT || 3000; //port ayarı 

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
}) //server başlatılır.