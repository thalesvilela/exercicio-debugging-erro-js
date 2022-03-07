//declaração da função que recebe um array e um número
function validaArray (arr, num){
    //declarat try/cath e colocar as condicionais dentro dele
    try{
    //verificação se um parâmetro não é verdadeiro
    //condicional if, negação com !, e com &&, throw erro com mensagem
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        //verificar se o array não é do tipo object.
        //condicional if, verificação pelo typeof, lançamento de erro typeerror
        if(typeof arr !== 'object') throw new TypeError ("Array precisa ser do tipo object");

        //verificar se o num não é do tipo número.
        if(typeof num !== 'number') throw new TypeError ("Num precisa ser do tipo number");

        //verificação do tamanho do array
        if(arr.length !== num) throw new RangeError("Tamanho Inválido");

        //retorna arr caso passe pelas condicionais
        return arr;
    }
    //criação do catch
    catch(e){

        //aplicação de filtros de erros pelas condicionais if
        if(e instanceof ReferenceError){
            //printar mensagem de erro específica
            console.log("Este erro é um ReferenceError!");
            //console.log(e.name) ou console.log(e.stack)
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.message);
         //caso não seja nenhum desses erros, console.log mensagem específica
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }

}
//chamar a vunção fora dela e printar resultado
console.log(validaArray(5,5));