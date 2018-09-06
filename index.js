function getLinksFromMd(StrMarkdown) {

    if(!StrMarkdown){
        throw new Error ("O parâmetro não deve estar vazio");
    }else if(typeof StrMarkdown === "number"){
        throw new Error ("Insira apenas texto");
    }else{
        let urlText = StrMarkdown.match(/\[(.*?)\]/g);
        let url = StrMarkdown.match(/\((.*?)\)/g);
            
        if( url === null|| urlText === null){
            return [];
        }else{
            var newObj = url.map((eachUrl, index)=>({
                href: eachUrl.replace(/[{()}]/g,""),
                text: urlText[index].replace(/[\[\]"]+/g,"")
            }));
            return newObj;
        }
    }
}
module.exports.getLinksFromMd = getLinksFromMd;

