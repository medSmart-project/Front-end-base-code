# MedSmart

**MedSmart** is a web application for a pharmacy that provides two main views:
1. **E-commerce View**: An online storefront where customers can browse, search, and purchase products.
2. **Product Management Dashboard**: A dashboard for pharmacists to manage inventory,process orders and maintain records.

## Project Structure

The project is organized into two main parts under the `src` directory: `components` and `views`. The `views` folder contains subfolders for both the e-commerce and dashboard views.

### Directory Structure

medsmart/ ├── src/ │ ├── assets/ │ ├── components/ │ │ ├── Aboutus.jsx │ │ ├── Button.jsx │ │ ├── ButtonSmall.jsx │ │ ├── CardSlider.jsx │ │ ├── Categories.jsx │ │ ├── Herosection.jsx │ │ ├── Nav.jsx │ │ ├── Offers.jsx │ │ ├── ProductCard.jsx │ │ ├── Recommended.jsx │ │ ├── Review.jsx │ │ ├── Reviews.jsx │ ├── views/ │ │ ├── dashboard/ │ │ │ ├── pages/ │ │ │ │ ├── Billing.jsx │ │ │ │ ├── Dashboard.jsx │ │ │ │ ├── Delivery.jsx │ │ │ │ ├── Partners.jsx │ │ │ │ ├── Products.jsx │ │ │ └── styles/ │ │ ├── e-commerce/ │ │ │ ├── pages/ │ │ │ │ ├── AboutUs.jsx │ │ │ │ ├── AllProducts.jsx │ │ │ │ ├── Cart.jsx │ │ │ │ ├── ContactUs.jsx │ │ │ │ ├── Home.jsx │ │ │ │ ├── ProductDetails.jsx │ │ │ │ ├── ProductsByCategory.jsx │ │ │ │ ├── TrackOrders.jsx │ │ │ └── styles/ │ ├── App.css │ ├── App.jsx │ ├── index.css │ ├── main.jsx


### Key Components

#### Common Components (Located in `components/`)

- **Aboutus.jsx**: Renders the About Us section.
- **Button.jsx & ButtonSmall.jsx**: Common button components for various actions across the app.
- **CardSlider.jsx**: Component for displaying a slider with cards.
- **Categories.jsx**: Component to display various product categories.
- **Herosection.jsx**: Displays the hero section on the landing page.
- **Nav.jsx**: Navigation component for the app.
- **Offers.jsx**: Displays special offers available on the e-commerce platform.
- **ProductCard.jsx**: Reusable component for displaying product details.
- **Recommended.jsx**: Component to display recommended products.
- **Review.jsx & Reviews.jsx**: Components to display customer reviews.

#### Dashboard View (Located in `views/dashboard/pages/`)

- **Billing.jsx**: Handles billing information and processes.
- **Dashboard.jsx**: Main dashboard view for administrators.
- **Delivery.jsx**: Component for managing delivery information.
- **Partners.jsx**: Component to manage partner information.
- **Products.jsx**: Component for managing the list of products.

#### E-commerce View (Located in `views/e-commerce/pages/`)

- **AboutUs.jsx**: E-commerce page with company information.
- **AllProducts.jsx**: Displays all products available for purchase.
- **Cart.jsx**: Shopping cart component.
- **ContactUs.jsx**: Contact page for customer inquiries.
- **Home.jsx**: Home page for the e-commerce site.
- **ProductDetails.jsx**: Displays detailed information about a specific product.
- **ProductsByCategory.jsx**: Shows products filtered by category.
- **TrackOrders.jsx**: Allows users to track their orders.

### Styling

- **App.css**: Global styles for the application.
- **index.css**: Entry point styles.
- **styles/**: Contains styles specific to different views.

### Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/medsmart.git
    cd medsmart
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

4. **Build for production:**

    ```bash
    npm run build
    ```

### Technologies Used

- **Frontend**: React, JSX,vite, CSS,Tailwind.bootstrap,React Router
- **Backend**: (To be integrated)
- **State Management**: (To be determined)
- **APIs**: (To be determined)

### Future Development

- Integration of a backend API to handle orders, user management, and data storage.
- Implement machine learning models for prescription reading and sales predictions.
- add authentication for clients and pharmacists.
- implementing product search ,filtering and sorting.


## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
