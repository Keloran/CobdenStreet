package service

import (
	"time"
)

type ShoppingList struct {
	ID        int       `db:"id"`
	Created   time.Time `db:"created"`
	Completed time.Time `db:"completed"`
}

type ShoppingItem struct {
	ID         int    `db:"id"`
	Item       string `db:"item"`
	Weight     int    `db:"weight"`
	WeightType WeightType
	List       ShoppingList
}
