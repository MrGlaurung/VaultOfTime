<?php
/**
 * Created by PhpStorm.
 * User: al
 * Date: 2017-12-09
 * Time: 17:58
 */

namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AuthenticationController extends Controller
{
    /**
     * @Route("/Authenticate")
     */
    public function Index()
    {
        return $this->render(
            'Auth/authenticate.html.twig'
        );
    }
}