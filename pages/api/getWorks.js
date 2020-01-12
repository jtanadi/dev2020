import allWorks from "../../data/works.json"

export default function (req, res) {
  res.status(200).json(allWorks)
}
