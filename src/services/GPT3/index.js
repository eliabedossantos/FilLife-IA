
export function sendQuestionRecipe(){
    let result = null;
    const url = 'https://api.openai.com/v1/completions'
    
    const prompt = `Crie uma dieta para um dia com 5 refeições com foco em hipertrofia utilizando frango, ovos, pão, arroz, banana, brocolis. informe a quantidade de calorias de cada refeição e a quantidade de proteínas, carboidratos e gorduras. `

    fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + global.config.apiKey,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 4000, // tamanho da resposta
          temperature: 0.9, // criatividade na resposta
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("JSON:", json.choices[0].text);
            // result = json.choices[0].text;
        })
        .catch((error) => console.log("Error:", error))
        .finally(() => {
          console.log("Finalizado");
        });
    return result;
}