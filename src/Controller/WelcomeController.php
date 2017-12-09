<?php
/**
 * Created by PhpStorm.
 * User: al
 * Date: 2017-12-08
 * Time: 22:57
 */

namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class WelcomeController extends Controller
{
    /**
     * @Route("/")
     */
    public function Index()
    {
        return $this->render(
            'Welcome/home.html.twig'
        );
    }
}