package service

type WeightType struct {
	ID        int    `db:"id"`
	Name      string `db:"name"`
	Divisible bool   `db:"divisible"`
	By        int    `db:"divisibleBy"`
}
