const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-03", "01-06","45-98",],
  meditation: ["01-02"],
  journal:["01-07"]
}

nlwSetup.setData(data)
nlwSetup.load()