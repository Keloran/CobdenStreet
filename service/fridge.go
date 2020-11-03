package service

type FridgeItem struct {
  ID int `db:"id"`
  Name string `db:"name"`
  Weight int `db:"weight"`
  WeightType
}
