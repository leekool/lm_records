package services

type Product struct {
	Name  string
	Images Images
}

type Images struct {
	Front string
	Back  string
}
