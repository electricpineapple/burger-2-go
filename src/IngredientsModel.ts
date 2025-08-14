import beefPng from "./assets/beef.png"
import chickenPng from "./assets/chicken.png"
import porkPng from "./assets/pork.png"
import fishPng from "./assets/fish.png"
import tofuPng from "./assets/tofu.png"
import avocadoPng from "./assets/avocado.png"
import blackOlivePng from "./assets/black-olives.png"
import cucumberPng from "./assets/cucumbers.png"
import greenOlivePng from "./assets/green-olives.png"
import lettucePng from "./assets/lettuce.png"
import picklesPng from "./assets/pickles.png"
import redOnionPng from "./assets/red-onion.png"
import spinachPng from "./assets/spinach.png"
import tomatoPng from "./assets/tomato.png"
import whiteOnionPng from "./assets/white-onion.png"
import americanPng from "./assets/american.png"
import cheddarPng from "./assets/cheddar.png"
import colbyPng from "./assets/colby.png"
import muensterPng from "./assets/muenster.png"
import pepperJackPng from "./assets/pepper-jack.png"
import anchoviesPng from "./assets/anchovies.png"
import baconPng from "./assets/bacon.png"
import chiliCrispPng from "./assets/chilli-crisp.png"
import friedEggPng from "./assets/fried-egg.png"
import jellyPng from "./assets/jelly.png"
import kimchiPng from "./assets/kimchi.png"
import peanutButterPng from "./assets/peanut-butter.png"
import ketchupPng from "./assets/ketchup.png"
import mayoPng from "./assets/mayo.png"
import mustardPng from "./assets/mustard.png"
import ranchPng from "./assets/ranch.png"
import soySaucePng from "./assets/soy-sauce.png"
import yumYumPng from "./assets/yum-yum.png"

export type Category = "Proteins" | "Vegetables" | "Cheeses" | "Toppings & Spreads" | "Condiments";
export type Ingredient = { id: string; name: string; category: Category, icon: string };

export const INGREDIENTS: Ingredient[] = [
    { id: "beef", name: "Beef", category: "Proteins", icon: beefPng },
    { id: "chicken", name: "Chicken", category: "Proteins", icon: chickenPng },
    { id: "pork", name: "Pork", category: "Proteins", icon: porkPng },
    { id: "fish", name: "Fish", category: "Proteins", icon: fishPng },
    { id: "tofu", name: "Tofu", category: "Proteins", icon: tofuPng },
    //
    { id: "avocado", name: "Avocado", category: "Vegetables", icon: avocadoPng },
    { id: "black-olives", name: "Black Olives", category: "Vegetables", icon: blackOlivePng },
    { id: "cucumbers", name: "Cucumbers", category: "Vegetables", icon: cucumberPng },
    { id: "green-olives", name: "Green Olives", category: "Vegetables", icon: greenOlivePng },
    { id: "lettuce", name: "Lettuce", category: "Vegetables", icon: lettucePng },
    { id: "pickles", name: "Pickles", category: "Vegetables", icon: picklesPng },
    { id: "red-onion", name: "Red Onion", category: "Vegetables", icon: redOnionPng },
    { id: "spinach", name: "Spinach", category: "Vegetables", icon: spinachPng },
    { id: "tomato", name: "Tomato", category: "Vegetables", icon: tomatoPng },
    { id: "white-onion", name: "White Onion", category: "Vegetables", icon: whiteOnionPng },
    //
    { id: "american", name: "American", category: "Cheeses", icon: americanPng },
    { id: "cheddar", name: "Cheddar", category: "Cheeses", icon: cheddarPng },
    { id: "colby", name: "Colby", category: "Cheeses", icon: colbyPng },
    { id: "muenster", name: "Muenster", category: "Cheeses", icon: muensterPng },
    { id: "pepper-jack", name: "Pepper Jack", category: "Cheeses", icon: pepperJackPng },
    //
    { id: "anchovies", name: "Anchovies", category: "Toppings & Spreads", icon: anchoviesPng },
    { id: "bacon", name: "Bacon", category: "Toppings & Spreads", icon: baconPng },
    { id: "chili-crisp", name: "Chili Crisp", category: "Toppings & Spreads", icon: chiliCrispPng },
    { id: "fried-egg", name: "Fried Egg", category: "Toppings & Spreads", icon: friedEggPng },
    { id: "jelly", name: "Jelly", category: "Toppings & Spreads", icon: jellyPng },
    { id: "kimchi", name: "Kimchi", category: "Toppings & Spreads", icon: kimchiPng },
    { id: "peanut-butter", name: "Peanut Butter", category: "Toppings & Spreads", icon: peanutButterPng },
    //
    { id: "ketchup", name: "Ketchup", category: "Condiments", icon: ketchupPng },
    { id: "mayo", name: "Mayo", category: "Condiments", icon: mayoPng },
    { id: "mustard", name: "Mustard", category: "Condiments", icon: mustardPng },
    { id: "ranch", name: "Ranch", category: "Condiments", icon: ranchPng },
    { id: "soy-sauce", name: "Soy Sauce", category: "Condiments", icon: soySaucePng },
    { id: "yum-yum", name: "Yum Yum", category: "Condiments", icon: yumYumPng },
];